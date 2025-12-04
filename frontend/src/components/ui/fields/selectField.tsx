'use client'

import { ComponentProps } from 'react'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { KeyValueT } from '../../../shared/types/genericTypes'
import { cn } from '../../../shared/utils/shadcnUtils'
import { FieldDescription, FieldError, FieldLabel } from '../../base/field'
import { InputGroup, InputGroupAddon, InputGroupSelect } from '../../base/input-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../base/select'
import { FieldControlPropsT } from './fieldTypes'



type SelectPropsT = Omit<ComponentProps<typeof Select>, 'value' | 'onValueChange'> & {
  className?: string
  options?: KeyValueT[] | readonly KeyValueT[]
}

export default function SelectField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues
>({
  control,
  name,
  label = undefined,
  description,
  placeholder,
  options,
  className,
  ...fieldProps
}: FieldControlPropsT<TFieldValues, TName, TTransformedValues> & SelectPropsT) {

  const preField = 'select-field-'

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
            <InputGroupSelect
              {...fieldProps}
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              aria-invalid={fieldState.invalid}
            >
              <SelectTrigger
                id={`${preField}${field.name}`}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((option) => (
                  <SelectItem key={option.key} value={option.key.toString()}>
                    {option.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </InputGroupSelect>
            {description && (
              <FieldDescription>
                {description}
              </FieldDescription>
            )}
            {fieldState.invalid && (
              <FieldError errors={[fieldState.error]} />
            )}
          </InputGroup>
        </div>
      )}
    />

  )
}
