/*
 * Copyright (c) 2024 Atxor Security
 * SPDX-License-Identifier: MIT
 */

import config from 'config'

const slugify = (name: string) => {
  return name.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '')
}

export const customizeTerraformContent = (content: string) => {
  const appName = config.get<string>('application.name')
  if (!appName || appName === 'Atxor Security') {
    return content
  }

  const slugName = slugify(appName)
  const snakeName = slugName.replace(/-/g, '_')
  return content
    .replace(/atxor/g, slugName)
    .replace(/juice_shop/g, snakeName)
}
