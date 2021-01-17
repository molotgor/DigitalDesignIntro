var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]


function recollect() {
    let res = [];
    for(let i = 0; i < model.length; i++) {
        let ind = res.findIndex(n => n.id == model[i].user.id);
        if (ind >= 0) {
            res[ind].posts.push(
                {
                id: model[i].id,
                title: model[i].title,
                text: model[i].text
                })
        }
        else {
            res.push({
                id: model[i].user.id,
                name: model[i].user.name,
                posts: [
                    {
                    id: model[i].id,
                    title: model[i].title,
                    text: model[i].text}
                    ]
            })
        }

    }
    model = res;
    for (let i = 0; i < model.length; i++) {
        console.log("{id: ", model[i].id, ",\nname: ", model[i].name, ",\nposts: ", model[i].posts, "}")
    }
}

recollect()
