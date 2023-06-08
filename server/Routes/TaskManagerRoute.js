const {Router}= require("express")
const {getTasks, pendingTasks,completedTasks,TasksaccordingtodueDate}= require("../controllers/TaskManagerController");
const {saveTask}=require("../controllers/TaskManagerController");
const {updateTask}=require("../controllers/TaskManagerController");
const {deleteTask}=require("../controllers/TaskManagerController");
const {updateStatus}=require("../controllers/TaskManagerController");
const {getTasksAlphabetically}=require("../controllers/TaskManagerController");
const router = Router()


router.get('/', getTasks)
router.post('/save',saveTask)
router.post('/update',updateTask)
router.post('/delete', deleteTask)
router.post('/UpdateStatus',updateStatus)
router.get('/getTasksAlphabetically',getTasksAlphabetically)
router.get('/pendingTasks',pendingTasks)
router.get('/completedTasks',completedTasks)
router.get('/TasksaccordingtodueDate',TasksaccordingtodueDate)
module.exports = router;


