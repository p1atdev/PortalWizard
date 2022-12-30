export type AUTO1111V1Samplers = AUTO1111V1Sampler[]

export interface AUTO1111V1Sampler {
  name: string
  aliases: string[]
  options: Options
}

export interface Options {
  discard_next_to_last_sigma?: string
  scheduler?: string
}
