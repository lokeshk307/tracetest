/*
TraceTest

OpenAPI definition for TraceTest endpoint and resources

API version: 0.2.1
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"fmt"
)

// SupportedDataStores the model 'SupportedDataStores'
type SupportedDataStores string

// List of SupportedDataStores
const (
	JAEGER      SupportedDataStores = "jaeger"
	OPEN_SEARCH SupportedDataStores = "openSearch"
	TEMPO       SupportedDataStores = "tempo"
	SIGNAL_FX   SupportedDataStores = "signalFx"
	OTLP        SupportedDataStores = "otlp"
)

// All allowed values of SupportedDataStores enum
var AllowedSupportedDataStoresEnumValues = []SupportedDataStores{
	"jaeger",
	"openSearch",
	"tempo",
	"signalFx",
	"otlp",
}

func (v *SupportedDataStores) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := SupportedDataStores(value)
	for _, existing := range AllowedSupportedDataStoresEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid SupportedDataStores", value)
}

// NewSupportedDataStoresFromValue returns a pointer to a valid SupportedDataStores
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewSupportedDataStoresFromValue(v string) (*SupportedDataStores, error) {
	ev := SupportedDataStores(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for SupportedDataStores: valid values are %v", v, AllowedSupportedDataStoresEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v SupportedDataStores) IsValid() bool {
	for _, existing := range AllowedSupportedDataStoresEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to SupportedDataStores value
func (v SupportedDataStores) Ptr() *SupportedDataStores {
	return &v
}

type NullableSupportedDataStores struct {
	value *SupportedDataStores
	isSet bool
}

func (v NullableSupportedDataStores) Get() *SupportedDataStores {
	return v.value
}

func (v *NullableSupportedDataStores) Set(val *SupportedDataStores) {
	v.value = val
	v.isSet = true
}

func (v NullableSupportedDataStores) IsSet() bool {
	return v.isSet
}

func (v *NullableSupportedDataStores) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSupportedDataStores(val *SupportedDataStores) *NullableSupportedDataStores {
	return &NullableSupportedDataStores{value: val, isSet: true}
}

func (v NullableSupportedDataStores) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSupportedDataStores) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
