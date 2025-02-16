/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"

import { twMerge } from "tailwind-merge"
import qs from 'query-string'


export function formUrlQuery({
  params,
  key,
  value,
} : {
  params: string
  key: string
  value: string | null
}){
  const currentUrl = qs.parse(params)
  currentUrl[key] = value
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    {
      skipNull: true
    }
  )
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal = (num:number): string =>{
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int
}
// PROMP create toslug ts arrow function that convert text to lowercase remove all non-word char
//white space non hyphen charactes replace whitespace trim loading hyphens
export const toSlug = (text:string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')

    const CURRENCY_PORMATTER =new Intl.NumberFormat('en-US', {
      currency:'USD',
      style:'currency',
      minimumFractionDigits:2,
    })
    export function formatCurrency(amount:number) {
      return CURRENCY_PORMATTER.format(amount)
    }
    const NUMBER_FORMATTER =new Intl.NumberFormat('en-US')
    export function formatNumber(number:number) {
      return NUMBER_FORMATTER.format(number)
    }

    export const round2 = (num:number) => 
      Math.round((num + Number.EPSILON) * 100) / 100

    export const generateId = () =>
      Array.from({length : 24},() => Math.floor(Math.random() * 10)).join('')


    export const formatError = (error: any): string =>{
      if(error.name === 'ZodError') {
        const fieldErrors = Object.keys(error.errors).map((field) =>{
          const errorMessage = error.errors[field].errorMessage
          return  `${error.errors[field].path}: ${errorMessage}`
        })
        return fieldErrors.join('.')
      }else if(error.name === 'ValidatorError'){
          const fieldErrors = Object.keys(error.errors).map((field)=>{
            const errorMessage = error.errors[field].errorMessage
            return errorMessage
          })
          return fieldErrors.join('.')
      }else if(error.code ===11000){
        const duplicateField = Object.keys(error.keyVolume)[0]
        return `${duplicateField} already exist`
      }else{
        return typeof error.message === 'string' ? error.message : JSON.stringify(error.message)
      }
    }

    export function calculateFutureDate(days: number) {
      const currentDate = new Date()
      currentDate.setDate(currentDate.getDate() + days)
      return currentDate
    }
    export function getMonthName(yearAndMonth: string) {
      const [year, monthNumber] = yearAndMonth.split('-')
      const date = new Date()
      date.setMonth(parseInt(monthNumber) - 1)
      return new Date().getMonth()=== parseInt(monthNumber) -1 
      ? `${date.toLocaleString('default', { month: 'long' })} ${year}`
      :date.toLocaleString('default', { month: 'long' })

    }

    export function calculatePastDate(days: number) {
      const currentDate = new Date()
      currentDate.setDate(currentDate.getDate() - days)
      return currentDate
    }
    export function timeUntilMidnight() {
      const now = new Date()
      const midnight = new Date()
      midnight.setHours(24, 0, 0, 0)

      const diff = midnight.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60 ))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      return { hours, minutes }
    }

    export const formatDateTime = (dateString: Date) => {
      const dateTimeOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12:true,
      }
      const dateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12:true,
      }
      const formattedDateTime: string = new Date(dateString).toLocaleString(
        'en-US', dateTimeOptions
      )
      const formattedDate: string = new Date(dateString).toLocaleString(
        'en-US', dateOptions
      )
      const formattedTime: string = new Date(dateString).toLocaleString(
        'en-US', timeOptions
      )
      return { dateTime:formattedDateTime, 
        dateOnly:formattedDate, 
        timeOnly:formattedTime 
      }
    }

    export function formatId(id: string) {
       return `..${id.substring(id.length - 6)}`
    }
    export const getFilterUrl =({
      params,
      category,
      tag,
      sort,
      price,
      rating,
      page,
    } : {
      params:{
        q?: string
        category?: string
        tag?: string
        sort?: string
        price?: string
        rating?: string
        page?: string
      }
      category?: string
      tag?: string
      sort?: string
      price?: string
      rating?: string
      page?: string
    }) =>{
      const newParams = {...params}
      if(category) newParams.category = category
      if(tag) newParams.tag = toSlug(tag)
      if(sort) newParams.sort = sort
      if(price) newParams.price = price
      if(rating) newParams.rating = rating
      if(page) newParams.page = page
      return `/search?${new URLSearchParams(newParams).toString()}`
    }