const usdExchangeRate = 6.7193;

const hkdExchangeRate = 0.8534;

const xboxGamePassUltimateData = 'games-data/xbox-game-pass-ultimate.csv';

const playstationPlusExtraData = 'games-data/playstation-plus-extra.csv';

const calTitleValue = (price, score, releaseYear, rateFixed) => {
    let titleValue = (price * 0.1 + Math.pow(score, 3) * 0.0001 + Math.pow(Number(releaseYear) - 1985, 3) * 0.001) * rateFixed;
    return titleValue;
}

export default {
    usdExchangeRate,
    hkdExchangeRate,
    xboxGamePassUltimateData,
    playstationPlusExtraData,
    calTitleValue
};
