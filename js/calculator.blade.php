@extends('layouts.front')

@section('content')
    <section id="calculator-area">
        <div class="container">
            <div class="row justify-content-around my-5">
                <div class="left-side col-12 col-md-6 ">
                    <h2>
                        @lang('main.page.calc.title')
                    </h2>
                    <form action="#">
                        <div class="for-select-area">
                            <div class="row justify-content-evenly">
                                <div class="col-6 for-select">
                                    <label for="room">@lang('main.page.calc.select.room')</label>
                                    <select name="room" onchange="_changeRoom(this)" id="room">
                                    </select>
                                </div>
                                <div class="col-6 for-select">
                                    <label for="room">@lang('main.page.calc.select.area')</label>
                                    <select name="area" onchange="_selectArea(this)" id="area">
                                        <option disabled selected>Sahə Seçin</option>
                                    </select>
                                </div>
                            </div>
                            <div class="border-area"></div>
                            <div class="row down-select-area">
                                
                                <div class="col-12 col-sm-12 col-lg-6 select-area">
                                    <div class="for-select-border">
                                        <label>İlkin ödəniş, faiz</label>
                                        <select name="percent" onchange="_changePercent(this)"  id="percent">
                                        </select>
                                    </div>
                                </div>

                                <div class="col-12 col-sm-12 col-lg-6 select-area">
                                    <div class="for-select-border">
                                        <label> Müddət </label>
                                        <select name="month" onchange="_changeMonth(this)"  id="month">
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-lg-12 select-area">
                                    <div class="for-select-border">
                                        <p class="first-p">Evin qiyməti</p>
                                        <p id="homePrice"> <i class="fa-solid fa-circle-notch fa-spin"></i></p>
                                    </div>
                                </div>

                            </div>
                            <div class="for-button">
                                <button onclick="hesabla()" type="button" >
                                    Hesabla
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="right-side col-12 col-md-5">
                    <div class="price-side">
                        <p class="montlhy-payment">Aylıq ödəniş</p>

                        <div class="cost-area">
                            <img src="../src/photos/Vector (10).png" alt="">
                            <p id="paymentByMonth" class="mx-auto"></p>
                        </div>

                        <div class="border-area"></div>

                        <div class="price-place">
                            <div class="initial-payment">
                                <span>İlkin ödəniş</span>
                                <p id="initialPaymet"></p>
                            </div>
                            <div class="total-payment">
                                <span>Ödəniş müddəti</span>
                                <p id="monthPeriod"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--<section id="calculator-area" style="margin-top:200px;margin-bottom:200px;">-->
    <!--    <div class="container">-->
    <!--        <div class="row justify-content-around my-5">-->
    <!--            <div class="left-side col-12 col-md-6 ">-->
    <!--                <h2>-->
    <!--                    Texniki məsələlərlə görə kalkulyator bölməsi <span class="text-warning">müvəqqəti</span> olaraq işləmir.-->
    <!--                </h2>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--</section>-->
@endsection
@section('scripts')
    <script src="{{ asset('js/initialCalc.js?v='.uniqid()) }}"></script>
    <script src="{{ asset('js/calc.js?v='.uniqid()) }}"></script>
@endsection
