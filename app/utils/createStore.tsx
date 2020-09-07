
export default function createStore() {
    return {
        friends: 1,
        makeFriend() {
            console.log(this.friends++)
        },
        get doubleCount() {
            return this.friends * 2
        }
    }
}