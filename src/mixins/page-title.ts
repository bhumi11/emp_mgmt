const PageTitle = {
    methods: {
        setPageTitle(title: string) {
            document.title = title + ' | Product Configurator';
        }
    }
}

export default PageTitle;