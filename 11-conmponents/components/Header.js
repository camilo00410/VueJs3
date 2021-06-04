app.component("header-principal" , {
    template: `
        <header>
            <h1>{{title}}</h1>
        </header>
    `,
    data: () => ({
        title: 'Componentes desde Data',
    })
})