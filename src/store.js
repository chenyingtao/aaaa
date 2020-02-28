import {
	createStore,
	combineReducers
} from 'redux'
var arr1 = [{
	type: 'shouli',
	money: 500,
	name: '王大锤',
	typename: '王大锤生日',
	type2: '寿宴收礼',
	time: '2020-6-21'
}, {
	type: 'songli',
	money: 600,
	name: '王大锤',
	typename: '王大锤生日',
	type2: '寿宴收礼',
	time: '2020-6-21'
}]
var arr2 = [{
	type: '待参加',
	where: '王大锤家',
	typename: '王大锤生日',
	type2: '寿宴',
	time: '2020-6-21',
}, {
	type: '已参加',
	where: '王大锤家',
	typename: '王大锤生日',
	type2: '寿宴',
	time: '2020-6-21'
}]

var arr1s = function(state = arr1, action) {
	switch (action.type) {
		case 'shouli':
			return [...state, {
				type: action.type,
				money: action.money,
				name: action.name,
				typename: action.typename,
				time: action.time,
				type2: action.type2,
				text: action.text
			}]
		case 'songli':
			return [...state, {
				type: action.type,
				money: action.money,
				name: action.name,
				typename: action.typename,
				time: action.time,
				type2: action.type2,
				text: action.text
			}]
		default:
			return state
	}
}
var arr2s = function(state = arr2, action) {
	switch (action.type) {
		case 'add':
			return [...state, {
				text: action.text,
				isInfo: false
			}]
		default:
			return state
	}
}
var info = 'shouli'
var infos = function(state = info, action) {
	switch (action.type) {
		case 'set':
			return action.info
		default:
			return state
	}
}
var stores = combineReducers({
	arr1s,
	arr2s,
	infos
})
var store = createStore(stores);

export default store