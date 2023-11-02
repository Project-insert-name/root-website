import {AddCircleIcon, RobotIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType( {
  name: 'styre_roller',
  type: 'document',
  title: 'Roller i styret',
  icon: AddCircleIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: "Rolle i styret",
      icon: RobotIcon,
      description: 'Hvilken rolle kan medlemmer ha i styret f.eks leder'
    })
  ]
})