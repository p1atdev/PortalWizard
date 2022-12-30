export interface AUTO1111V1Progress {
  progress: number
  eta_relative: number
  state: AUTO1111V1ProgressState
  current_image: null
}

export interface AUTO1111V1ProgressState {
  skipped: boolean
  interrupted: boolean
  job: string
  job_count: number
  job_no: number
  sampling_step: number
  sampling_steps: number
}
