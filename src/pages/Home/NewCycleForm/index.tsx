import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { CyclesContext } from '../../../contexts/CyclesContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        type="text"
        disabled={!!activeCycle}
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Estudos" />
        <option value="Exercicio fisico" />
        <option value="Descanso" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        disabled={!!activeCycle}
        placeholder="0"
        step={1}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
