import { createStore } from 'vuex'
import music from './music'

export default createStore(
	{
		modules: {
			music,
		}
	}
)