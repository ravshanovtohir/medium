const responseTime = ((req, res, next) => {
    const startTime = process.hrtime();

    res.on('finish', () => {
        const totalTime = process.hrtime(startTime);
        const totalTimeInMs = totalTime[0] * 1000 + totalTime[1] / 1e6;
        console.log(totalTimeInMs);
    });

    next();
})

export default {
    responseTime
}