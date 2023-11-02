import {UserIcon, RobotIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'


export default defineType( {
  name: 'styremedlem',
  type: 'object',
  title: 'Styremedlemer',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: "Navn",
    }),
    defineField({
      name: 'photo_member',
      type: 'image',
      title: 'Styremedlem bilde',
    }),
    defineField({
      name: 'rolle',
      type: 'array',
      title: 'Rolle',
      icon: RobotIcon,
      of: [{ type: 'reference', to: [{ type: 'styre_roller'}]}]
    })
  ]
})