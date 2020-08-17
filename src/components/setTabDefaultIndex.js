const handleClickTab = (index) => {
    const target = tournamentRoutes[index];
    console.log(target);
    history.push(
        `${configData.pathPrefix}/tournament/list/${match.params.t8t_serial}/${target.key}`
    );
};

let targetIndex = 0;
if (match.params?.tab_name) {
    const { tab_name } = match.params;
    targetIndex = tournamentRoutes.findIndex((tab) => tab.key === tab_name);
}

if (!match.params?.t8t_serial) return null;

return(
<TabLv1
    theme="dark"
    tabList={tournamentRoutes.map((val) => {
        switch (val.title) {
            case 'Overview':
                return { ...val, title: intl.formatMessage({ id: 'Single-Tournament-Page_Overview' }) }
            case 'Participants':
                return { ...val, title: intl.formatMessage({ id: 'Single-Tournament-Page_Participants' }) }
            case 'Brackets':
                return { ...val, title: intl.formatMessage({ id: 'Single-Tournament-Page_Brackets' }) }
            case 'Standings':
                return { ...val, title: intl.formatMessage({ id: 'Single-Tournament-Page_Standings' }) }
            case 'Media':
                return { ...val, title: intl.formatMessage({ id: 'Single-Tournament-Page_Media' }) }
            default:
                return {}
        }
    })}
    defaultIndex={targetIndex}
    onClick={(index) => handleClickTab(index)}
/>)