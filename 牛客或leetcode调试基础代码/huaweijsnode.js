const { countReset } = require("console");

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

void async function() {
    // 写代码地方，例子如下
    while (n = await readline()) {
        let nums = [1, 2, 3, 1]
        let dp = []
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])
        for (let i = 2; i < nums.lenght; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }
        console.log(dp[nums.length - 1])
        console.log(dp)

    }
}()