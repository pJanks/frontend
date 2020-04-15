import React from 'react';
import { fetchAllUserActivities, postNewActivity, fetchScheduledActivity } from './apiCalls';
import renderer from 'react-test-renderer';


describe('fetchAllUserActivities', () => {
  const mockResponse = {
    "id": 1,
    "username": "test_user",
    "first_name": "user",
    "last_name": "name",
    "scheduled_activities": [
      {
        "id": 1,
        "activity": "Baseball",
        "date": "2020-04-08T16:57:12Z",
        "location": "Denver, CO",
        "forecast": "Overcast",
        "forecast_img": "cloudy"
      },
      {
        "id": 2,
        "activity": "Hiking",
        "date": "2020-04-18T12:00:00Z",
        "location": "Breckenridge, CO",
        "forecast": "Sunny",
        "forecast_img": "sunny"
      }
    ]
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    test('should call fetch with the correct URL', () => {
      fetchAllUserActivities(1);
      expect(window.fetch).toHaveBeenCalledWith(`https://rain-or-shine-backend.herokuapp.com/api/v1/users/1/scheduled_activities`)
    })

    test('should return an object with user activity data', () => {
      fetchAllUserActivities(1)
        .then(data => expect(data).toEqual(mockResponse))
    })

    test('should return an error', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
        })
      });

      expect(fetchAllUserActivities(1)).rejects.toEqual(Error('Failed to retrieve user activities.'))
    });

    test('should return an error if the Promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Failed to retrieve user activities.'))
      })

      expect(fetchAllUserActivities(1)).rejects.toEqual(Error('Failed to retrieve user activities.'))
    })
  })

describe('postNewActivity', () => {
  let mockInputs = { 
    id: 1,
    activity: 1, 
    location: 'Denver, CO',
    date: '2020-04-19' }
  let mockOptions;

  beforeEach(() => {
    mockOptions = {
      method: 'POST',
      body: JSON.stringify({
        activity_id: mockInputs.activity, 
        location: mockInputs.location,
        date: mockInputs.date}),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          activity_id: mockInputs.activity, 
          location: mockInputs.location,
          date: mockInputs.date})
      })
    })
  })

  test('should call fetch with the correct URL', () => {
    postNewActivity(mockInputs);
    expect(window.fetch).toHaveBeenCalledWith(`https://rain-or-shine-backend.herokuapp.com/api/v1/users/1/scheduled_activities/new`, mockOptions)
  })

  test('should return an object with user activity data', () => {
    postNewActivity(mockInputs)
      .then(data => expect(data).toEqual(mockResponse))
  })

  test('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    });

    expect(postNewActivity(mockInputs)).rejects.toEqual(Error('Failed post new activity.'))
  });

  test('should return an error if the Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed post new activity.'))
    })

    expect(postNewActivity(mockInputs)).rejects.toEqual(Error('Failed post new activity.'))
  })
})

describe('fetchScheduledActivity', () => {
  const mockResponse = {
      "id": 1,
      "date": "2020-04-08T16:57:12Z",
      "location": "Denver, CO",
      "forecast": "Overcast",
      "forecast_img": "cloudy",
      "activity": {
      "id": 4,
      "name": "Baseball",
      "primary_muscles": [
      {
      "id": 3,
      "name": "Calves",
      "primary_exercises": [
      {
      "id": 1,
      "name": "180-twisting-jump-squats",
      "description": "Targets calves and hamstrings and quadriceps and also involves abs and glutes & hip flexors.",
      "img_url": "",
      "equipment": "NO EQUIPMENT",
      "instructions": "Begin standing tall with a tight core. Your chest will be up and your gaze will be straight ahead. Bend at the knees and drive your hips back as you lower yourself into a squat position. Launch yourself up while simultaneously twisting to the other side. Your body will perform a 180 degree turn in midair. Land with bent knees and immediately go right into another jump squat, turning to the starting position. Repeat this alternating pattern."
      },
      {
      "id": 3,
      "name": "agility-ladder-drills",
      "description": "Targets abs and calves and glutes & hip flexors and hamstrings and lower back and quadriceps and also involves biceps and shoulders and triceps.",
      "img_url": "",
      "equipment": "Agility Ladder",
      "instructions": "Lay out the agility ladder on a non-slip surface.  Perform a routine of choice."
      },
      {
      "id": 12,
      "name": "barbell-overhead-squats",
      "description": "Targets calves and hamstrings and quadriceps and also involves abs and shoulders.",
      "img_url": "",
      "equipment": "Barbell / EZ-Bar",
      "instructions": "Place an appropriate amount of weight on a barbell in a squat rack. Position your hands in an overhand grip outside of shoulder-width on the barbell. Before beginning, make sure that your core is tight and your chest is up. Push the barbell straight above your head, locking out your elbows. Once you feel stabilized, slowly bend the knees and drive back your hips. Once your upper thighs come parallel with the ground, slowly push back up, returning to the starting position."
      },
      {
      "id": 14,
      "name": "barbell-split-squats",
      "description": "Targets calves and hamstrings and quadriceps and also involves abs.",
      "img_url": "",
      "equipment": "Barbell / EZ-Bar",
      "instructions": "Place an appropriate amount of weight on a barbell in a squat rack. Once ready, position yourself underneath the barbell. Keep your core tight and drive your hips forward to lift the barbell off the rack. Step away from the rack. Secure the barbell on your traps and make sure your core is braced before beginning. Step out with the left foot, leaving the right foot behind. From this position, lower the back right knee towards the ground. Push up with your front left leg. Please note that you will not kick back up into a regular standing position until all repetitions have been completed. Continue this up and down pattern. Switch sides and perform the same pattern with the right leg in front."
      },
      {
      "id": 51,
      "name": "cardio-road-bike-cycling-riding",
      "description": "Targets calves and hamstrings and quadriceps and also involves abs.",
      "img_url": "",
      "equipment": "Full gym",
      "instructions": "Adjust your bike seat so that you can comfortably lean forward with a flat back to reach the handlebar. When sitting on the bike, focus on tightening the core. This includes your abs as well as lower back. This will help you lean forward. Begin on a higher gear speed as a warm-up. Push all the way through the entire pedal rotation. Be sure to focus the tension on the quadriceps and calves. Move the gear into the larger, more difficult ones. Again, use a full range of motion and focus the tension of the leg muscles."
      }
      ]
      }
      ],
      "secondary_muscles": [
      {
      "id": 7,
      "name": "Hamstrings",
      "secondary_exercises": [
      {
      "id": 4,
      "name": "air-squats",
      "description": "Targets hamstrings and quadriceps and also involves abs and hamstrings.",
      "img_url": "",
      "equipment": "NO EQUIPMENT",
      "instructions": "Place your feet at shoulder width apart while keeping your chest up and your abdominals braced. Begin the movement by swinging your arms up towards your shoulders. At the same time, bend at the knees and drive your hips back like you’re sitting in a chair. Once your upper thighs are parallel with the ground, pause, then drive your hips forward to return to the starting position."
      },
      {
      "id": 11,
      "name": "barbell-lunges",
      "description": "Targets quadriceps and also involves abs and calves and glutes & hip flexors and hamstrings.",
      "img_url": "",
      "equipment": "Barbell / EZ-Bar",
      "instructions": "Set up a  barbell on a rack  at just below shoulder level. Step under the bar placing the back of your shoulders under it. Do not rest the bar on your neck. Grip the the bar using an overhand grip with your elbows bent to90 degrees or slightly more. Less of an angle means your hands are too close together which can cause instability of balance. Lift the barbell clear of the rack by  pushing with your legs, while straightening your torso. Step away from the rack. Step forward with your right leg and squat down through your hips. Keep your back straight  and be careful to maintain your balance. Inhale as you lower yourself. Continue lowering your body until your left knee is nearly touching the floor. Return to the start position b pushing through your heel,exhaling as you do so. Complete all the repetitions for one leg before switching."
      },
      {
      "id": 15,
      "name": "barbell-squats",
      "description": "Targets glutes & hip flexors and quadriceps and also involves abs and calves and hamstrings and lower back.",
      "img_url": "",
      "equipment": "Barbell / EZ-Bar",
      "instructions": "Set up the barbell on the squat rack so that it is at the same height as your upper chest. Position your body under the bar, with knees bent so that the bar is resting high on the back of your shoulders. Grip the bar with your hands comfortably wider than your shoulders. Slowly straighten your legs to push upwards, lifting the barbell from the rack and take one step forward. Stand with your legs shoulder width apart. Bend your knees forward and allow your hips to bend back as if sitting down, Continue this movement down until your thighs are parallel to the floor or slightly more, making sure your knees are pointing in the same direction as your feet. Hold for a count of one. Push up through your heels while straightening your hips and knees, until you are standing in the start position. Make any adjustments necessary to your stance and grip before continuing on the next repetition."
      },
      {
      "id": 17,
      "name": "battle-rope-double-arm-slams",
      "description": "Targets abs and shoulders and upper back & lower traps and also involves biceps and calves and glutes & hip flexors and hamstrings and quadriceps.",
      "img_url": "",
      "equipment": "Battle Rope",
      "instructions": "Holding a battle rope in each hand, slightly bend at the knees and maintain a tight core. In an explosive movement, bring the ropes upward to your shoulder level as you perform a small jump in the air. At the top of the movement, immediately come down into a squatting position and slam the ropes downward to the ground. Repeat the movement, ensuring you keep the ropes in the same pattern."
      },
      {
      "id": 18,
      "name": "battle-rope-double-waves",
      "description": "Targets abs and shoulders and upper back & lower traps and also involves calves and hamstrings and quadriceps.",
      "img_url": "",
      "equipment": "Battle Rope",
      "instructions": "Holding a battle rope in each hand, slightly bend at the knees and maintain a tight core. Synchronize the ropes to follow an up and down pattern. Bring the ropes upward together to your shoulder level then downward to hip level and immediately back up. Repeat the movement, ensuring you keep the ropes together. Do not lock out your elbows at any point during the exercise."
      }
      ]
      },
      {
      "id": 13,
      "name": "Shoulders",
      "secondary_exercises": [
      {
      "id": 3,
      "name": "agility-ladder-drills",
      "description": "Targets abs and calves and glutes & hip flexors and hamstrings and lower back and quadriceps and also involves biceps and shoulders and triceps.",
      "img_url": "",
      "equipment": "Agility Ladder",
      "instructions": "Lay out the agility ladder on a non-slip surface.  Perform a routine of choice."
      },
      {
      "id": 12,
      "name": "barbell-overhead-squats",
      "description": "Targets calves and hamstrings and quadriceps and also involves abs and shoulders.",
      "img_url": "",
      "equipment": "Barbell / EZ-Bar",
      "instructions": "Place an appropriate amount of weight on a barbell in a squat rack. Position your hands in an overhand grip outside of shoulder-width on the barbell. Before beginning, make sure that your core is tight and your chest is up. Push the barbell straight above your head, locking out your elbows. Once you feel stabilized, slowly bend the knees and drive back your hips. Once your upper thighs come parallel with the ground, slowly push back up, returning to the starting position."
      },
      {
      "id": 13,
      "name": "barbell-pushups-push-ups",
      "description": "Targets chest and triceps and also involves abs and shoulders.",
      "img_url": "",
      "equipment": "Barbell / EZ-Bar",
      "instructions": "Place a loaded barbell on the floor and place your hands at a slightly-wider-than-shoulder-width grip.  Bracing your core, get into push-up position with a straight posture from head to heel. Lower your body down until your chest hovers about ½ an inch from the bar. Use a combination of chest and triceps power to push your body back up away from the bar."
      },
      {
      "id": 29,
      "name": "bent-over-water-bottle-flyes",
      "description": "Targets upper back & lower traps and also involves shoulders.",
      "img_url": "",
      "equipment": "Water Bottles",
      "instructions": "Begin by holding a pair of water bottles and standing with a braced core. Bend at the knees slightly and lean forward from the hips. Maintain a flat back throughout. Keeping your elbows slightly bent throughout the movement, lift the water bottles up and out to the side. Be sure to focus the contraction in the back of the shoulders. Pause at the top of the movement then slowly bring the water bottles to the starting position."
      },
      {
      "id": 36,
      "name": "bosu-ball-chest-dumbbell-flyes-flies",
      "description": "Targets abs and chest and also involves shoulders and triceps.",
      "img_url": "",
      "equipment": "Bosu ball, Dumbbells",
      "instructions": "Begin by sitting on the floor with your lower back against the side of the Bosu ball, and with the dumbbells resting on your upper thighs.  Lower yourself back onto the Bosu ball while bringing the dumbbells onto your chest. Naturally you should create a straight bridge from your knees to your shoulders. Extend the dumbbells upward so that they are directly above your chest, without locking your arms, while keeping you hands internally rotated. Lower the the dumbbells away from each other, opening your chest while creating tension. Be sure not to lower the dumbbells past your shoulder line.   Bring the dumbbells back inwards to meet in the central starting position. Like hugging a barrel."
      }
      ]
      }
      ]
      },
      "user": {
      "id": 1,
      "username": "test_user",
      "first_name": "user",
      "last_name": "name",
      "scheduled_activities": [
      {
      "id": 1,
      "activity": "Baseball",
      "date": "2020-04-08T16:57:12Z",
      "location": "Denver, CO",
      "forecast": "Overcast",
      "forecast_img": "cloudy"
      },
      {
      "id": 2,
      "activity": "Hiking",
      "date": "2020-04-18T12:00:00Z",
      "location": "Breckenridge, CO",
      "forecast": "Sunny",
      "forecast_img": "sunny"
      }
      ]
      },
      "created_at": "2020-04-08T16:57:43.934888Z",
      "updated_at": "2020-04-08T16:57:43.934931Z"
      }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    test('should call fetch with the correct URL', () => {
      fetchScheduledActivity(1, 1);
      expect(window.fetch).toHaveBeenCalledWith(`https://rain-or-shine-backend.herokuapp.com/api/v1/users/1/scheduled_activities/1`)
    })

    test('should return an object with user activity data', () => {
      fetchScheduledActivity(1, 1)
        .then(data => expect(data).toEqual(mockResponse))
    })

    test('should return an error', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
        })
      });

      expect(fetchScheduledActivity(1, 1)).rejects.toEqual(Error('Failed to retrieve user activities.'))
    });

    test('should return an error if the Promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Failed to retrieve user activities.'))
      })

      expect(fetchScheduledActivity(1, 1)).rejects.toEqual(Error('Failed to retrieve user activities.'))
    })
  })
