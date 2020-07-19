

export const getChartData = (ministryList: Array<any> = []) => {
    return ministryList.sort(orderFn).map(getChartDataFn);
}

const getChartDataFn = (el: any) => {
    return {
        x: el.name,
        y: el.evaluation.description,
    }
}

const orderFn = (prev: any, next: any) => {
    return prev.evaluation.value > next.evaluation.value ? 1 : -1;
}

export const getCategories = (data: Array<any>) => {
    const sorted = data.sort(orderFn);
    const x = sorted.map( (el: any) => el.evaluation.description );
    return { x }
}