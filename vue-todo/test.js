function solution(requestTime) {
  const n = requestTime.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i > 2 && requestTime[i] == requestTime[i - 3]) {
      ans++;
    } else if (i > 19 && requestTime[i] - requestTime[i - 20] < 10) {
      ans++;
    } else if (i > 59 && requestTime[i] - requestTime[i - 60] < 60) {
      ans++;
    }
  }
  return ans;
}

console.log(
  solution([
    100,
    100,
    101,
    102,
    102,
    103,
    103,
    105,
    105,
    106,
    106,
    106,
    107,
    107,
    109,
    109,
    109,
    109,
    110,
    110,
    110,
    111,
    111,
    112,
    114,
    115,
    115,
    116,
    116,
    116,
    117,
    118,
    118,
    120,
    120,
    121,
    121,
    122,
    122,
    123,
    123,
    124,
    124,
    125,
    127,
    128,
    128,
    129,
    131,
    133,
    134,
    135,
    135,
    135,
    136,
    137,
    137,
    137,
    138,
    138,
    140,
    140,
    140,
    141,
    141,
    143,
    144,
    145,
    146,
    149,
    149,
    149,
    149,
    149,
    151,
    151,
    152,
    152,
    154,
    154,
    155,
    156,
    156,
    157,
    158,
    158,
    159,
    159,
    160,
    160,
    160,
    162,
    162,
    162,
    164,
    166,
    167,
    167,
    169,
    169,
    172,
    172,
    172,
    172,
    174,
    175,
    175,
    175,
    176,
    177,
    177,
    177,
    179,
    179,
    180,
    180,
    180,
    180,
    181,
    181,
    181,
    182,
    182,
    183,
    183,
    183,
    184,
    184,
    187,
    187,
    188,
    188,
    188,
    188,
    189,
    189,
    189,
    190,
    191,
    191,
    192,
    192,
    193,
    195,
    195,
    195,
    195,
    197,
    198,
    198,
    199,
    199,
    200,
    200,
    200,
  ]),
);