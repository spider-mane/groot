<?php

namespace Theme\Models;

use Theme\Models\SocialMedia;

class Entity
{
    /**
     *
     */
    public static function owner()
    {
        return ThemeData::get('entity.owner');
    }

    /**
     *
     */
    public static function title(?string $format = null)
    {
        $optionFormat = ThemeData::get('entity.option_key_formats.title');

        return get_option(sprintf($optionFormat, $format));
    }

    /**
     *
     */
    public static function address(?string $component = null)
    {
        if ($component) {
            return ThemeData::get("entity.address.{$component}");
        }

        return [
            'street' => ThemeData::get('entity.address.street', null),
            'city' => ThemeData::get('entity.address.city', null),
            'state' => ThemeData::get('entity.address.state', null),
            'zip' => ThemeData::get('entity.address.zip', null),
        ];
    }

    /**
     *
     */
    public static function contactInfo(?string $thing = null)
    {
        $format = ThemeData::get('entity.option_key_formats.contact');

        if ($thing) {

            $default = ThemeData::get("entity.contact.{$thing}", null);

            return get_option(sprintf($format, $thing), $default);
        }
    }

    /**
     *
     */
    public static function socialMedia()
    {
        return SocialMedia::getAccounts();
    }

    /**
     *
     */
    public static function all()
    {
        return [
            'short_title' => static::title('short'),
            'full_title' => static::title('full'),
            'styled_title' => static::title('styled'),
            'phone' => static::contactInfo('phone'),
            'email' => static::contactInfo('email'),
            'address' => static::address(),
            'social_media' => static::socialMedia(),
        ];
    }
}
