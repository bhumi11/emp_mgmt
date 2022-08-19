const PageTitle = {
    methods: {
        setPageTitle(title: string) {
            document.title = title + ' | Employee Management';
        }
    }
}

export default PageTitle;