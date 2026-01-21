import { produce } from "immer";

const state = {
    name: 'Tom',
    hobbies: [ 'tennis', 'soccer']
}
produce(state, draft => {
    console.log(draft);
})