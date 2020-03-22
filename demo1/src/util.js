function createCloud(className) {
    AV.init({
        appId: 'leXCyDw0hL1NNH1a9nifzUPz-gzGzoHsz',
        appKey: 'xesW9bYQD1apSIz7UYD4LtSu',
        serverURLs: 'https://lexcydw0.lc-cn-n1-shared.com'
    })
    const classTodo = AV.Object.extend(className)
    return classTodo
}
function saveClient() {
    const todo = new this.classTodo()
    todo.set({ 'title': this.message })
    todo.save().then(res => {
        console.log('添加成功')
    })
    this.message = ''
}