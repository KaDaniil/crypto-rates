// A hardcoded chart which might be used properly with history data.
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Typography from '@mui/material/Typography';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Replace with actual date labels
    datasets: [{
        label: 'Rate',
        data: [0.65, 0.66, 0.64, 0.67, 0.69, 0.71], // Replace with actual rate data
        borderColor: '#2979ff',
        backgroundColor: '#2979ff',
    }],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Currency Rate Over Time',
        },
    },
};

const FakeChart = () => {
    return (
        < >
            <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mt: 8 }}>
                Fake Rate History (Mocked)
            </Typography>
            <Line data={chartData} options={chartOptions} />
        </>
    );
};

export default FakeChart;
