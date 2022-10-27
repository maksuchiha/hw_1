import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (item: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (name: string, setError: string, setName: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    addUserCallback(name, setError, setName)
    setName('')
}

export const pureOnBlur = (name: string, setError: (item: string) => void) => { // если имя пустое - показать ошибку
     if (!name) {
         setError('error')
     }
}

export const pureOnEnter = (e: KeyboardEvent<any>, addUser: (item: string) => void) => { // если нажата кнопка Enter - добавить
    if (e.code === 'Enter') {

        addUser(e.currentTarget.value)
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<any>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent ) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.map((item: UserType, index: number ) => index === users.length - 1 ? item.name : error).join('') // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
