'use client'

import { ComponentProps } from 'react'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { cn } from '../../../shared/utils/shadcnUtils'
import { FieldError, FieldLabel } from '../../base/field'
import { InputGroup, InputGroupAddon, InputGroupTextarea } from '../../base/inputGroup'
import { FieldControlPropsT } from './fieldTypes'



type TextAreaPropsT = Omit<ComponentProps<'textarea'>, 'autoComplete'>

export function TextAreaField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues
  >({
  control,
  name,
  label = undefined,
  placeholder,
  autoComplete = 'one-time-code',
  className,
  ...fieldProps
}: FieldControlPropsT<TFieldValues, TName, TTransformedValues> & TextAreaPropsT) {

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
                <FieldLabel htmlFor={`${preField}${field.name}`} className="ml-1">
                  {label}
                </FieldLabel>
                  
              </InputGroupAddon>
            )}
            <InputGroupTextarea
              {...fieldProps}
              {...field}
              id={`${preField}${field.name}`}
              aria-invalid={fieldState.invalid}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className="px-2! pt-0! pb-0.5! text-base!"
            />
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </InputGroup>
        </div>
      )}
    />

  )
}
