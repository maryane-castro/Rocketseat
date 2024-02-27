import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

// icon 
import { Play } from "phosphor-react";

// form
import { useForm } from "react-hook-form"

// bibliotecas de validação
import { zodResolver } from '@hookform/resolvers/zod' 
import * as zod from 'zod'


// objeto fora da HOME
const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),  //minimo de 1 caracter
    minutesAmount: zod
      .number()
      .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
  })

export function Home(){

    const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    })


    function handleCreateewCycle(data: any) {
        console.log(data)
    }

    const task = watch('task')
    const isSubmitDisable = !task


    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em </label>
                    <TaskInput 
                        id="task" 
                        list="task-suggestion" 
                        placeholder="Dê um nome para o seu projeto"
                        {...register('task')}
                    />

                    <datalist id="task-suggestion">
                        <option value="1"/>
                        <option value="3232"/>
                    </datalist>

                    
                    <label htmlFor="minutesAmount">Durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}  // importante 
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span>minutos.</span>
                </FormContainer>
            

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountdownButton disabled={isSubmitDisable} type="submit">
                    <Play/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}