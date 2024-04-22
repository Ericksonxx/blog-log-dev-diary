import './styles.scss'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

//icons
import iconBold from '../../icons/bold.png'
import iconItalic from '../../icons/italic.png'
import iconStrike from '../../icons/strike.png'
import iconBulletList from '../../icons/bullet.png'
import iconOrderedList from '../../icons/ordered.png'
import iconCode from '../../icons/code.png'
import iconH1 from '../../icons/h1.png'
import iconH2 from '../../icons/h2.png'
import iconH3 from '../../icons/h3.png'
import { useEffect, useState } from 'react'

//redux
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCurrentTask } from '../../features/currentTask/currentTaskSlice'
import { current } from '@reduxjs/toolkit'

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className='button-array'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <img className='icon' src={iconBold} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <img className='icon' src={iconItalic} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
         <img className='icon' src={iconStrike} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
         <img className='icon' src={iconH1} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
         <img className='icon' src={iconH2} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
         <img className='icon' src={iconBulletList} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <img className='icon' src={iconOrderedList} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <img className='icon' src={iconCode} />
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
      >
        purple
      </button>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]


export default ({ content }: { content: string}) => {

  const task = useAppSelector(state => state.task)
  const currentTask = useAppSelector(state => state.currentTask)
  const dispatch = useAppDispatch()   

if(content) {
  return(
    <EditorProvider content={content} extensions={extensions}>
    <MenuBar />
  </EditorProvider> 
  )
}
    

}