import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AppState } from '../../app/store';
import { Post } from '../../interfaces/index';

export interface PostState {
    data: Post[],
    status: 'idle' | 'loading' | 'failed'
}

const initialState: PostState = {
    data: [],
    status: 'idle'
}

export const fetchPost = createAsyncThunk(
    'post/fetchPosts',
    async() => {
        const response = await fetch("/data/post.json");
        const result = await response.json()
        let posts:PostState[] = result.map((value: PostState) => value)
        return posts;
    }
)

interface ActionPostAdd {
    title?: string,
    body?: string
}
export const counterSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdd: {
            reducer: (state, action: PayloadAction<Post>) => {
                const post:Post = {
                    id: state.data.length != 0 ? state.data[state.data.length-1].id + 1 : 1,
                    title: action.payload.title,
                    body: action.payload.body
                }
                state.data.unshift(post)
            },
            prepare: ({title, body}:ActionPostAdd):any => {
                return { payload: {
                    title,
                    body
                }}
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPost.fulfilled, (state, action: any) => {
                state.status = 'idle'
                state.data = action.payload
            })
    }
})



export const { postAdd } = counterSlice.actions;
export const selectPost = (state: AppState) => state.post.data

export default counterSlice.reducer;