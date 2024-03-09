import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceData=[
        {
          "id": 1,
          "name": "FitZone A",
          "location": "Downtown",
          "price": 30.00,
          "amenities": ["Cardio Equipment", "Weightlifting Area"],
          "features": ["24/7 Access", "Personal Trainers"]
        },
        {
          "id": 2,
          "name": "PowerGym",
          "location": "Suburbia",
          "price": 40.00,
          "amenities": ["Cardio Equipment", "Sauna"],
          "features": ["Group Classes", "Childcare Services"]
        },
        {
          "id": 3,
          "name": "FlexFitness",
          "location": "City Plaza",
          "price": 35.00,
          "amenities": ["Weightlifting Area", "Group Classes"],
          "features": ["Nutrition Counseling", "Free Parking"]
        },
        {
          "id": 4,
          "name": "SweatZone",
          "location": "Business District",
          "price": 45.00,
          "amenities": ["Cardio Equipment", "Group Classes", "Sauna"],
          "features": ["Yoga Studio", "Cafe"]
        },
        {
          "id": 5,
          "name": "Wellness Hub",
          "location": "Lakeside",
          "price": 55.00,
          "amenities": ["Cardio Equipment", "Weightlifting Area", "Sauna"],
          "features": ["Spa Services", "Outdoor Workout Area"]
        },
        {
          "id": 6,
          "name": "FitLife Center",
          "location": "Mountain View",
          "price": 60.00,
          "amenities": ["Cardio Equipment", "Weightlifting Area", "Group Classes", "Sauna"],
          "features": ["Swimming Pool", "Sports Courts"]
        },
        {
          "id": 7,
          "name": "UrbanFitness",
          "location": "City Square",
          "price": 38.00,
          "amenities": ["Cardio Equipment", "Weightlifting Area"],
          "features": ["Virtual Classes", "Modern Equipment"]
        },
        {
          "id": 8,
          "name": "ActiveZone",
          "location": "Tech Park",
          "price": 42.00,
          "amenities": ["Cardio Equipment", "Weightlifting Area", "Group Classes"],
          "features": ["Tech Integration", "Cycling Studio"]
        },
        {
          "id": 9,
          "name": "EcoFit Gym",
          "location": "Green Valley",
          "price": 48.00,
          "amenities": ["Cardio Equipment", "Weightlifting Area", "Sauna"],
          "features": ["Green Initiatives", "Outdoor Yoga"]
        }
      ]
      
      
    return (



        <div>
            <h1 className="text-4xl font-semibold text-white text-center">Price Option of my gym</h1>
            <div className=" grid md:grid-cols-3 gap-9 m-8">
            {
                PriceData.map(item => <PriceOption
                    key={item.id}
                    priceAllData={item}>
                    
                    </PriceOption>)
            }
           </div>
            
        </div>
    );
};

export default PriceOptions;