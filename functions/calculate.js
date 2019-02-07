exports.calculate = function(params) {
  const { origin, destination, minute_price, minutes, plan } = params

  const withoutPlan = minute_price * parseFloat(minutes)
    let withPlan = 0

    if (minutes > plan.minutes) {
      withPlan = minute_price * (parseFloat(minutes) - plan.minutes)
      withPlan += (withPlan * 0.1).toFixed(2)
    }

    return {
      data: {
        origin,
        destination,
        plan: plan.title,
        minutes: parseFloat(minutes),
        withPlan,
        withoutPlan
      }
    }
};