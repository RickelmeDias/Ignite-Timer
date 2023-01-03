import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Cycle, cyclesReducer } from '../reducers/Cycles/reducer'
import {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentCycle,
  markCurrentCycleAsFinished,
} from '../reducers/Cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: String | null
  markCycleAsFinished: () => void
  amountSecondsPassed: number
  changeAmountSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatchCycle] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialValue) => {
      const cyclesCacheJSON = localStorage.getItem(
        '@ignite-time:cycles-state-1.0.0',
      )

      if (!cyclesCacheJSON) return initialValue

      return JSON.parse(cyclesCacheJSON)
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-time:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function markCycleAsFinished() {
    dispatchCycle(markCurrentCycleAsFinished())
    document.title = 'Ignite Timer'
  }

  function changeAmountSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: CreateCycleData) {
    const id = new Date().getTime().toString()
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setAmountSecondsPassed(0)
    dispatchCycle(addNewCycleAction(newCycle))
  }

  function interruptCycle() {
    setAmountSecondsPassed(0)
    dispatchCycle(interruptCurrentCycle())
    document.title = 'Ignite Timer'
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCycleAsFinished,
        amountSecondsPassed,
        changeAmountSecondsPassed,
        createNewCycle,
        interruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
