/**
 * 아래의 객체를 변경 불가능하게 만들어주세요.
 */

const Bob = {
  firstName: 'Bob',
  surname: 'Keel',
  profile: {
    rating: 'medium',
    school: 'Harvard University',
    education: {
      first: 'Master',
      second: 'Doctor',
    },
  },
} as const;


