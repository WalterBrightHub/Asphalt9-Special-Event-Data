import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 200,
  toolCars: [
    {
      car_id: 'solus',
      fullName: 'Mclaren Solus GT🔑',
      nickName: 'Solus GT',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'daytonasp3',
      fullName: 'Ferrari Daytona SP3🔑',
      nickName: 'SP3',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '650s',
      fullName: 'Mclaren 650S GT3',
      nickName: '650S',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'me412',
      fullName: 'Chrysler ME412',
      nickName: 'ME412',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'f8',
      fullName: 'Ferrari F8 Tributo',
      nickName: 'F8',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    

    {
      car_id: 'utopia',
      fullName: 'Pagani Utopia Coupe',
      nickName: '乌托邦',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "氪佬注意，阶段 13 也有图纸！",
    "显而易见，本次提车最低条件为：Solus 钥匙、SP3 钥匙、650S 解锁、【 3 星 me412 + 6 星 F8 】或【 4 星 ME412 + 5 星 F8 】。"
  ],
  processRewords: [
    { conditions: 20, reword: { type: 'seCard', count: 1 } },
    { conditions: 40, reword: { type: 'credit', count: 20000 } },
    { conditions: 60, reword: { type: 'token', count: 30 } },
    { conditions: 110, reword: { type: 'credit', count: 30000 } },
    { conditions: 130, reword: { type: 'token', count: 70 } },
    { conditions: 160, reword: { type: 'seCard', count: 1 } },
    { conditions: 185, reword: { type: 'credit', count: 50000 } },
    { conditions: 220, reword: { type: 'token', count: 100 } },
    { conditions: 235, reword: { type: 'sePart', count: 1 } },
    { conditions: 255, reword: { type: 'seSkin', count: 1 } },
    { conditions: 280, reword: { type: 'seKey', count: 1 } },


  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 105 },
            { type: 'credit', count: 115000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 20,
      clubRewords: [
        { type: 'token', count: 50 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 115 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 40,
      clubRewords: [
        { type: 'token', count: 50 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 145 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 60,
      clubRewords: [
        { type: 'token', count: 50 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 145 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 80,
      clubRewords: [
        { type: 'token', count: 75 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 100,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 135000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 125,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 150000 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 145,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: false }],
          rewords: [
            { type: 'credit', count: 270000 },
            { type: 'token', count: 200 },
            { type: 'seCard', count: 8 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 180,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: false }],
          rewords: [
            { type: 'credit', count: 270000 },
            { type: 'token', count: 200 },
            { type: 'seCard', count: 8 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 200,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 75000 },
      ],
      missions: [
        {
          conditions: 26,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 300 },
            { type: 'seCard', count: 9 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 220,
      clubRewords: [
        { type: 'seCard', count: 2 },
        { type: 'token', count: 100 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'credit', count: 600000 },
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 9 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 245,
      clubRewords: [
        { type: 'seCard', count: 2 },
        { type: 'credit', count: 175000 },
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type: 'credit', count: 630000 },
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 280,
      clubRewords: [
        { type: 'seCard', count: 3 },
        { type: 'credit', count: 100000 },
        { type: 'token', count: 200 },
      ],
      missions: [
        {
          conditions: 44,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1300000 },
            { type: 'token', count: 1700 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: false }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 5 },
          ],
        },
      ],
    },

    {
      stage: 14,
      unlockConditions: 280,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: false }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
