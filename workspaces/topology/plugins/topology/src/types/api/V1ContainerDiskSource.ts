/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Represents a docker image with an embedded disk.
 * @export
 * @interface V1ContainerDiskSource
 */
export interface V1ContainerDiskSource {
  /**
   * Image is the name of the image with the embedded disk.
   * @type {string}
   * @memberof V1ContainerDiskSource
   */
  image: string;
  /**
   * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images +optional
   * @type {string}
   * @memberof V1ContainerDiskSource
   */
  imagePullPolicy?: string;
  /**
   * ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist.
   * @type {string}
   * @memberof V1ContainerDiskSource
   */
  imagePullSecret?: string;
  /**
   * Path defines the path to disk file in the container
   * @type {string}
   * @memberof V1ContainerDiskSource
   */
  path?: string;
}
