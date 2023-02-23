import { translations } from "../TranslateAPI"

import React from "react"
import { useUser } from "../userContext"

import { useEffect } from "react"

import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"


export const storageSave = (key, value) => {
    validateKey(key)

    if (!value) {
        throw new Error("storageSave: No value provided for " + key)
    }
    sessionStorage.setItem(key, JSON.stringify(value)) //Stringify fordi application<localstorage<key: value - value kan bare være string, ikke object 
}


const Profile = () => {
    const { user, setUser } = useUser()
    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id)
            if (error == null) {
                storageSave(latestUser)
                setUser(latestUser)
            }
        }
        findUser()
    }, [])
}

const ProfileActions = () => {
    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")) {
            // add logic to handle logout 
        }
    }
}

const handleClearHistoryClick = async () => {
    if (!window.confirm("Are you sure\nThis cannot be undone.")) {
        return
    }
    //const [clearError] = await orderClearHistory(user.id)
    //if (clearError !== null) {
    //    return 
    //}

    const updatedUser = {
        ...user,
        orders: []
    }
    storageSave(updatedUser)
    setUser(updatedUser)
}


const ProfileHistory = () => {
    let keyCounter = 0;
    const { user } = useUser()
    const { handleSubmit } = useForm()

    const onDelete = () => {
        // add logic to delete history
    }
    return (
        <div id="profile-history">
            <h3>Here are your latest translations</h3>
            <div>
                {user.isLoading ? (
                    <span className="loader"></span>
                ) : (
                    user.translations.map((translation) => // .map() - to turn arrays into html elements
                        keyCounter < 10 ? <p key={keyCounter++}>{translation}</p> : null
                    )
                )}
            </div>
            <form onSubmit={handleSubmit(onDelete)}>
                <button>Delete history</button>
            </form>
        </div>
    )
}

export default Profile