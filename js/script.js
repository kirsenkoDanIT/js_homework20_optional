'use strict'

const projectDeadline = (points, tasks, deadlineDate) => {
    const pointsPerDay = points.reduce((acc, item) => {
        return acc += item;
    }, 0);
    const allTasks = tasks.reduce((acc, item) => {
        return acc += item;
    }, 0);
    const now = new Date;
    const daysToDeadline = new Array();
    while (now < deadlineDate) {
        daysToDeadline.push((new Date(now.setDate(now.getDate() + 1))).getDay())
    }
    const workDaysToDeadline = daysToDeadline.filter(item => {
        return (item !== 0 && item !== 6)
    });
    const workingTime = allTasks / pointsPerDay;
    const message_1 = `Все задачи будут успешно выполнены за ${Math.round(workDaysToDeadline.length - workingTime)} дня(ей) до наступления дедлайна!`
    const message_2 = `Команде разработчиков придется потратить дополнительно ${Math.round((workingTime - workDaysToDeadline.length) * 8)} часа(ов) после дедлайна, чтобы выполнить все задачи в беклоге`;
    return (workingTime < workDaysToDeadline.length) ? message_1 : message_2;
};

const points = [1, 2, 3];
const tasks = [4, 5, 6];
const deadlineDate = new Date('2019-05-20');

console.log(projectDeadline(points, tasks, deadlineDate))