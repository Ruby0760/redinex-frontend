import { BarChart } from '@mui/x-charts/BarChart';


const AnalyticsForm = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sample Data',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56],
            },
        ],
    };
    return (
        <>
           <BarChart
            series={[
                { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
                { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
                { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
                { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
                { data: [10, 6, 5, 8, 9], label: 'Series C1' },
            ]}
            width={600}
            height={350}
            />
        </>
    )
}
export default AnalyticsForm;