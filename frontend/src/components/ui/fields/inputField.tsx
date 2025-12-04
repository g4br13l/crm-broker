'use client'

import { ComponentProps } from 'react'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { cn } from '../../../shared/utils/shadcnUtils'
import { FieldError, FieldLabel } from '../../base/field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../../base/input-group'
import { FieldControlPropsT } from './fieldTypes'



type InputPropsT = Omit<ComponentProps<'input'>, 'autoComplete'>

export function InputField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues
>({
  control,
  type = 'text',
  name,
  label = undefined,
  placeholder,
  autoComplete = 'one-time-code',
  maskFn,
  className,
  ...fieldProps
}: FieldControlPropsT<TFieldValues, TName, TTransformedValues> & InputPropsT) {

  console.log('(InputField)')
  const preField = 'input-field-'

  return (

    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className={cn('m-0 p-0 w-full', className)}>
          <InputGroup data-invalid={fieldState.invalid}>
            {label && (
              <InputGroupAddon align="block-start" className="px-1! pt-0.5! pb-0!">
                <FieldLabel htmlFor={`${preField}${field.name}`} className="ml-1 text-sm">
                  {label}
                </FieldLabel>
              </InputGroupAddon>
            )}
            <InputGroupInput
              {...fieldProps}
              {...field}
              type={type}
              id={`${preField}${field.name}`}
              aria-invalid={fieldState.invalid}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className="px-2! pt-0! pb-0.5! text-base!"
              {...(maskFn && {
                onChange: (e) => { field.onChange(maskFn(e.target.value)) }
              })}
            />
          </InputGroup>
          <div className="mx-1 w-full">
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </div>
        </div>
      )}
    />

  )
}
