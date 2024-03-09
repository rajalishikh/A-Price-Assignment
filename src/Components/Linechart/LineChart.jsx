import { Line, LineChart as LineData, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const student=
         [
          {
            "student_id": 123456,
            "student_name": "John Doe",
            "math": 85,
            "physics": 78
          },
          {
            "student_id": 234567,
            "student_name": "Jane Smith",
            "math": 90,
            "physics": 85
          },
          {
            "student_id": 345678,
            "student_name": "Bob Johnson",
            "math": 78,
            "physics": 92
          },
          {
            "student_id": 456789,
            "student_name": "Sarah Davis",
            "math": 95,
            "physics": 89
          },
          {
            "student_id": 567890,
            "student_name": "Michael Brown",
            "math": 88,
            "physics": 91
          },
          {
            "student_id": 678901,
            "student_name": "Emily Wilson",
            "math": 92,
            "physics": 85
          },
          {
            "student_id": 789012,
            "student_name": "Alex Turner",
            "math": 75,
            "physics": 76
          },
          {
            "student_id": 890123,
            "student_name": "Sophia Miller",
            "math": 83,
            "physics": 94
          },
          {
            "student_id": 901234,
            "student_name": "Daniel White",
            "math": 89,
            "physics": 87
          },
          {
            "student_id": 123789,
            "student_name": "Olivia Lee",
            "math": 94,
            "physics": 80
          },
          {
            "student_id": 456123,
            "student_name": "Ethan Garcia",
            "math": 80,
            "physics": 82
          },
          {
            "student_id": 789456,
            "student_name": "Ava Martinez",
            "math": 87,
            "physics": 88
          },
          {
            "student_id": 159753,
            "student_name": "William Robinson",
            "math": 91,
            "physics": 90
          },
          {
            "student_id": 357951,
            "student_name": "Grace Harris",
            "math": 76,
            "physics": 79
          },
          {
            "student_id": 852147,
            "student_name": "Liam Campbell",
            "math": 82,
            "physics": 83
          }
        ]
      
      
      
      
    return (
        <div>
            <h1 className='text-2xl text-center mb-3 font-semibold text-white underline'>Here is the grape of our collage result </h1>
            <LineData width={600} height={500} data={student}  >
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line type={'monotone'} dataKey={'math'} stroke='red'></Line>
                <Line type={'monotone'} dataKey={'physics'}></Line>
            </LineData>
            
        </div>
    );
};

export default LineChart;