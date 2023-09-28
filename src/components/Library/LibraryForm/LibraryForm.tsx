import React from 'react'
import styles from './LibraryForm.module.css'
import addBtn from '../../../assets/img/add.svg'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { addNewWord } from '../../../redux/libraryReduser'

const valid = Yup.object().shape({
  word: Yup.string()
    .min(1, 'Слишком короткое слово!')
    .max(20, 'Слишком длинное слово!')
    .required('Пустое поле ввода!'),
  translation: Yup.string()
    .min(1, 'Слишком короткое слово!')
    .max(20, 'Слишком длинное слово!')
    .required('Пустое поле ввода!'),
})

export default function LibraryForm() {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{ word: '', translation: '' }}
      validationSchema={valid}
      onSubmit={values => {
        dispatch(addNewWord({ word: values.word, translation: values.translation }))
        values.word = ''
        values.translation = ''
      }}
    >
      {() => (
        <Form className={styles.addWordBlock}>
          <Field type='text' name='word' placeholder='Русское слово' />

          <button type='submit' className={styles.addWordBlockButton}>
            <img src={addBtn} alt='addBtn' className={styles.addWordBlockImg} />
          </button>
          <Field type='text' name='translation' placeholder='Английское слово' />
        </Form>
      )}
    </Formik>
  )
}
