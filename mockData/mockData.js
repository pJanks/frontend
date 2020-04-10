const mockData = [{
    "id": 1,
    "date": "2020-04-06",
    "location": "Denver, CO",
    "forecast": "Overcast",
    "forecast_img": "cloudy",
    "activity": {
        "id": 1,
        "name": "Hiking",
        "muscle_groups": [
            {
                "id": 1,
                "name": "Biceps",
                "exercise_set": [
                    {
                        "id": 1,
                        "name": "Pull Ups",
                        "description": "Pull yourself up ya dingus",
                        "img_url": "fake_img"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Forearms",
                "exercise_set": [
                    {
                        "id": 3,
                        "name": "Push Ups",
                        "description": "Push yo' self",
                        "img_url": "some_img"
                    },
                    {
                        "id": 4,
                        "name": "Small Arm Circles",
                        "description": "Feel the burn",
                        "img_url": "some_img"
                    },
                ]
            }
        ]
    },
    "user": {
        "id": 1,
        "first_name": "user",
        "last_name": "name"
    },
    "created_at": "2020-04-06T03:23:26.122544Z",
    "updated_at": "2020-04-06T03:23:26.122555Z"
}, {
    "id": 2,
    "date": "2020-04-01",
    "location": "Las Vegas, Nv",
    "forecast": "Sunny",
    "forecast_img": "sunshine",
    "activity": {
        "id": 3,
        "name": "Running",
        "muscle_groups": [
            {
                "id": 4,
                "name": "Calves",
                "exercise_set": [
                    {
                        "id": 1,
                        "name": "Pull Ups",
                        "description": "Pull yourself up ya dingus",
                        "img_url": "fake_img"
                    },
                    {
                        "id": 2,
                        "name": "Curls",
                        "description": "curl some heavy weights",
                        "img_url": "some_img"
                    },
                    {
                        "id": 3,
                        "name": "Push Ups",
                        "description": "Push yo' self",
                        "img_url": "some_img"
                    },
                    {
                        "id": 4,
                        "name": "Small Arm Circles",
                        "description": "Feel the burn",
                        "img_url": "some_img"
                    },
                    {
                        "id": 5,
                        "name": "Big Arm Circles",
                        "description": "Feel the bigger burn",
                        "img_url": "some_img"
                    },
                    {
                        "id": 6,
                        "name": "Jumping Jacks",
                        "description": "Don't stop, get it, get it",
                        "img_url": "some_img"
                    },
                ]
            }
        ]
    },
    "user": {
        "id": 1,
        "first_name": "user",
        "last_name": "name"
    },
    "created_at": "2020-04-02T03:23:26.122544Z",
    "updated_at": "2020-04-02T03:23:26.122555Z"
}, {
    "id": 3,
    "date": "2020-04-02",
    "location": "Boulder, CO",
    "forecast": "Rainy",
    "forecast_img": "rainclouds",
    "activity": {
        "id": 4,
        "name": "Kayaking",
        "muscle_groups": [
            {
                "id": 1,
                "name": "Biceps",
                "exercise_set": [
                    {
                        "id": 3,
                        "name": "Push Ups",
                        "description": "Push yo' self",
                        "img_url": "some_img"
                    },
                    {
                        "id": 1,
                        "name": "Pull Ups",
                        "description": "Pull yourself up ya dingus",
                        "img_url": "fake_img"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Ankles",
                "exercise_set": [
                    {
                        "id": 2,
                        "name": "Curls",
                        "description": "curl some heavy weights",
                        "img_url": "some_img"
                    }
                ]
            }
        ]
    },
    "user": {
        "id": 1,
        "first_name": "user",
        "last_name": "name"
    },
    "created_at": "2020-04-08T03:23:26.122544Z",
    "updated_at": "2020-04-08T03:23:26.122555Z"
},  {
    "id": 4,
    "date": "2020-04-07",
    "location": "Denver, CO",
    "forecast": "Windy",
    "forecast_img": "a picture of wind",
    "activity": {
        "id": 4,
        "name": "Kayaking",
        "muscle_groups": [
            {
                "id": 1,
                "name": "Biceps",
                "exercise_set": [
                    {
                        "id": 3,
                        "name": "Push Ups",
                        "description": "Push yo' self",
                        "img_url": "some_img"
                    },
                    {
                        "id": 1,
                        "name": "Pull Ups",
                        "description": "Pull yourself up ya dingus",
                        "img_url": "fake_img"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Ankles",
                "exercise_set": [
                    {
                        "id": 2,
                        "name": "Curls",
                        "description": "curl some heavy weights",
                        "img_url": "some_img"
                    }
                ]
            }
        ]
    },
    "user": {
        "id": 1,
        "first_name": "user",
        "last_name": "name"
    },
    "created_at": "2020-04-06T03:23:26.122544Z",
    "updated_at": "2020-04-06T03:23:26.122555Z"
}, {
    "id": 5,
    "date": "2020-04-07",
    "location": "Denver, CO",
    "forecast": "Sunny",
    "forecast_img": "sunshine",
    "activity": {
        "id": 2,
        "name": "Biking",
        "muscle_groups": [
            {
                "id": 4,
                "name": "Calves",
                "exercise_set": [
                    {
                        "id": 1,
                        "name": "Pull Ups",
                        "description": "Pull yourself up ya dingus",
                        "img_url": "fake_img"
                    },
                    {
                        "id": 2,
                        "name": "Curls",
                        "description": "curl some heavy weights",
                        "img_url": "some_img"
                    },
                    {
                        "id": 3,
                        "name": "Push Ups",
                        "description": "Push yo' self",
                        "img_url": "some_img"
                    },
                    {
                        "id": 4,
                        "name": "Small Arm Circles",
                        "description": "Feel the burn",
                        "img_url": "some_img"
                    },
                    {
                        "id": 5,
                        "name": "Big Arm Circles",
                        "description": "Feel the bigger burn",
                        "img_url": "some_img"
                    },
                    {
                        "id": 6,
                        "name": "Jumping Jacks",
                        "description": "Don't stop, get it, get it",
                        "img_url": "some_img"
                    },
                ]
            },
            {
                "id": 5,
                "name": "Knees",
                "exercise_set": [
                    {
                        "id": 1,
                        "name": "Pull Ups",
                        "description": "Pull yourself up ya dingus",
                        "img_url": "fake_img"
                    },
                    {
                        "id": 3,
                        "name": "Push Ups",
                        "description": "Push yo' self",
                        "img_url": "some_img"
                    },
                    {
                        "id": 4,
                        "name": "Small Arm Circles",
                        "description": "Feel the burn",
                        "img_url": "some_img"
                    },
                ]
            }
        ]
    },
    "user": {
        "id": 1,
        "first_name": "user",
        "last_name": "name"
    },
    "created_at": "2020-04-03T03:23:26.122544Z",
    "updated_at": "2020-04-03T03:23:26.122555Z"
}]

export default mockData;
