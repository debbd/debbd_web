"use client";
import {
  Button,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
  Badge,
} from "@/components/ui";
import {
  getCountryDataList,
  getCountryData,
  TCountryCode,
} from "countries-list";
import { useMemo, useState } from "react";
import { Virtuoso } from "react-virtuoso";


export const PhoneCodeInput = () => {
  const [search, setSearch] = useState("");
  const [countryCode, setCountryCode] = useState("")
  const countries = getCountryDataList().map((item) => ({
    name: item.name,
    phoneCode: item.phone[0],
  }));
  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, countries]);
  return (
    <Combobox
      filteredItems={filteredCountries}
      onOpenChange={() => setSearch("")}
      defaultValue={
        countryCode !== ""
          ? {
              phoneCode: getCountryData(
                countryCode as TCountryCode
              ).phone?.[0],
            }
          : null
      }
      itemToStringLabel={(data: any) => data && `+${data.phoneCode}`}
    >
      <ComboboxTrigger
        render={
          <Button
            variant="outline"
            size={"sm"}
            className="w-full justify-between font-normal"
          >
            <ComboboxValue placeholder="Select your country" />
          </Button>
        }
      />
      <ComboboxContent className={"h-fit! overflow-hidden w-[400px] p-0! rounded-xl!"}>
        <ComboboxInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          showTrigger={false}
          showClear={true}
          placeholder="Search country"
        />
        <ComboboxEmpty>No country found.</ComboboxEmpty>

        <ComboboxList className={"h-fit! overflow-hidden p-0!"}>
          <Virtuoso
            className="h-[250px]! scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent"
            data={filteredCountries}
            itemContent={(_, item) => (
              <ComboboxItem key={item.phoneCode} value={item} className="rounded-[0px]! h-8! one_line_ellipsis text-nowrap!">
                <Badge variant="outline">{item.phoneCode}</Badge> {item.name}
              </ComboboxItem>
            )}
          />
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}