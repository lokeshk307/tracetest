/*
TraceTest

OpenAPI definition for TraceTest endpoint and resources

API version: 0.2.1
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// RunInformation struct for RunInformation
type RunInformation struct {
	Metadata      map[string]string `json:"metadata,omitempty"`
	EnvironmentId *string           `json:"environmentId,omitempty"`
}

// NewRunInformation instantiates a new RunInformation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRunInformation() *RunInformation {
	this := RunInformation{}
	return &this
}

// NewRunInformationWithDefaults instantiates a new RunInformation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRunInformationWithDefaults() *RunInformation {
	this := RunInformation{}
	return &this
}

// GetMetadata returns the Metadata field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *RunInformation) GetMetadata() map[string]string {
	if o == nil {
		var ret map[string]string
		return ret
	}
	return o.Metadata
}

// GetMetadataOk returns a tuple with the Metadata field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *RunInformation) GetMetadataOk() (*map[string]string, bool) {
	if o == nil || o.Metadata == nil {
		return nil, false
	}
	return &o.Metadata, true
}

// HasMetadata returns a boolean if a field has been set.
func (o *RunInformation) HasMetadata() bool {
	if o != nil && o.Metadata != nil {
		return true
	}

	return false
}

// SetMetadata gets a reference to the given map[string]string and assigns it to the Metadata field.
func (o *RunInformation) SetMetadata(v map[string]string) {
	o.Metadata = v
}

// GetEnvironmentId returns the EnvironmentId field value if set, zero value otherwise.
func (o *RunInformation) GetEnvironmentId() string {
	if o == nil || o.EnvironmentId == nil {
		var ret string
		return ret
	}
	return *o.EnvironmentId
}

// GetEnvironmentIdOk returns a tuple with the EnvironmentId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RunInformation) GetEnvironmentIdOk() (*string, bool) {
	if o == nil || o.EnvironmentId == nil {
		return nil, false
	}
	return o.EnvironmentId, true
}

// HasEnvironmentId returns a boolean if a field has been set.
func (o *RunInformation) HasEnvironmentId() bool {
	if o != nil && o.EnvironmentId != nil {
		return true
	}

	return false
}

// SetEnvironmentId gets a reference to the given string and assigns it to the EnvironmentId field.
func (o *RunInformation) SetEnvironmentId(v string) {
	o.EnvironmentId = &v
}

func (o RunInformation) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Metadata != nil {
		toSerialize["metadata"] = o.Metadata
	}
	if o.EnvironmentId != nil {
		toSerialize["environmentId"] = o.EnvironmentId
	}
	return json.Marshal(toSerialize)
}

type NullableRunInformation struct {
	value *RunInformation
	isSet bool
}

func (v NullableRunInformation) Get() *RunInformation {
	return v.value
}

func (v *NullableRunInformation) Set(val *RunInformation) {
	v.value = val
	v.isSet = true
}

func (v NullableRunInformation) IsSet() bool {
	return v.isSet
}

func (v *NullableRunInformation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRunInformation(val *RunInformation) *NullableRunInformation {
	return &NullableRunInformation{value: val, isSet: true}
}

func (v NullableRunInformation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRunInformation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
