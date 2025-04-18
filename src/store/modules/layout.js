export default {
    namespaced: true,
    state: {
        isCollapse: false,
        breadCrumb: ["首页"],
        tagsArr: ["首页"],
        currentTitle: "首页"
    },
    mutations: {
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse;
        },
        addTagsArr(state, val) {
            if (state.tagsArr.indexOf(val) === -1) {
                // console.log(state.tagsArr, state.tagsArr.indexOf(val))
                state.tagsArr.push(val)
            }
        },
        changeBreadCrumb(state, val) {
            state.breadCrumb = [...["首页"], ...val]
            // console.log(state.breadCrumb)
        },
        changeCurrentTitle(state, val) {
            state.currentTitle = val
            // console.log(state.currentTitle)
        },
        closeTag(state, val) {
            let index = state.tagsArr.indexOf(val)
            state.tagsArr = state.tagsArr.filter(item => item !== val)
            if (state.currentTitle === val) {
                if (index !== 0) {
                    state.currentTitle = state.tagsArr[state.tagsArr.length - 1]
                }
            }
        }
    }
}