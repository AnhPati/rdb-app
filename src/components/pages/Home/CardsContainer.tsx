import { users } from './../../../data/usersData'
const CardsContainer = () => {
    return (
        <div>
            {users.map(user => {
                return (
                    <section>
                        <h2>{user.event.eventName}</h2>
                        <img src={user.event.eventImgs[0]} alt={user.event.eventName} />
                    </section>
                )
            })}
        </div>
    )
}

export default CardsContainer