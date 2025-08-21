export interface AssetGlob {
  input: string;
  glob: string;
  output: string;
  ignore?: string[];
}

export interface BuildExecutorSchema {
  assets?: (string | AssetGlob)[];
}
