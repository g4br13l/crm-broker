'use client'

import { ComponentProps } from 'react'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { KeyValueT } from '../../../shared/types/genericTypes'
import { Field, FieldDescription, FieldError, FieldLabel } from '../../base/field'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../base/select'
import { FieldControlPropsT } from './fieldTypes'



type SelectPropsT = Omit<ComponentProps<typeof Select>, 'value' | 'onValueChange'> & {
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
  ...fieldProps
}: FieldControlPropsT<TFieldValues, TName, TTransformedValues> & SelectPropsT) {

  const preField = 'select-field-'

  return (

    <Controller 
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field
          data-invalid={fieldState.invalid}
          className="gap-0.5"
        >
          {label && (
            <FieldLabel
              htmlFor={`${preField}${field.name}`}
              className="ml-1"
            >
              {label}
            </FieldLabel>
          )}
          <Select
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
          </Select>
          {description && (
            <FieldDescription>
              {description}
            </FieldDescription>
          )}
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />

  )
}
