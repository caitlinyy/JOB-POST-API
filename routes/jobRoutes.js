import express from 'express'
import { createJob, getAllJobs, updateJob, deleteJob, showStats } from '../controller/jobsController.js'

const router = express.Router()

router.route('/').post(createJob).get(getAllJobs)
// router.route('/all').get(getAllJobs)
// router.route('/update').patch(updateJob)
// router.route('/:id').delete(deleteJob).patch(updateJob)
router.route('/stats').get(showStats)
router.route('/update').delete(deleteJob).patch(updateJob)

export default router